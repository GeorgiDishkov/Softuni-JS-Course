const { expect } = require("chai");
let { Repository } = require("./solution.js");

describe("Repository", () => {
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    describe("Initialization", () => {
        it("Should add props property on init ", () => {


            let repo = new Repository(properties);

            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal(properties);
        });

        it("Should have property data on init", () => {

            let repository = new Repository(properties);

            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
        })

        it('Should have nextId of zero init', () => {
            let repository = new Repository(properties);

            expect(repository).to.have.property('nextId');
            expect(typeof repository.nextId).to.equal('function');
        })
    });

    describe(`Should add new entyty`, () => {
        it("Should Return increment id if valid entruy is added", () => {
            let repository = new Repository(properties);

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        })

        it('Should store valid entry in data map', () => {
            let repository = new Repository(properties);

            repository.add(entity);

            expect(repository.data.get(0)).not.to.be.undefined;
            expect(repository.data.get(0)).to.deep.equal(entity);
            expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho')
            expect(repository.data.get(0)).to.have.property('age').that.equals(22)
            expect(repository.data.get(0)).to.have.property('birthday');
        })

        it(`Shoukd throw error if property is missing `, () => {
            let entity = {
                name: "Pesho",
                age: 22,
            };
            let entity1 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)

            };
            let entity2 = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let repository = new Repository(properties)
            //proverka za greshka
            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`);
            expect(() => repository.add(entity1)).to.throw(Error, `Property age is missing from the entity!`);
            expect(() => repository.add(entity2)).to.throw(Error, `Property name is missing from the entity!`);
        })

        it(`Should throw error if proppertu has other type`, () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1999-01-14T22:00:00:000Z',
            };
            let repository = new Repository(properties);

            expect(() => repository.add(entity).to.throw(Error, `Property birthday is not of correct type!`))
        })
    })

    describe("Get count", () => {
        it("Should return number of entries", () => {

            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);

            expect(repository.count).is.equal(3);
        })
        it(`Should return zero if no added entities`, () => {
            let repository = new Repository(properties)

            expect(repository.count).is.equal(0);
        })
    })

    describe('Get Id', () => {
        it('Should return entry by id', () => {
            let repository = new Repository(properties);

            repository.add(entity);

            expect(repository.getId(0)).to.deep.equal(entity);
        })
        it('Should throw error when no id os found', () => {
            let repository = new Repository(properties);

            expect(() => repository.getId(0).to.throw(Error, `Entity with id: 0 does not exist!`))
        })
    })
    describe('Update', () => {
        it('Should update one valid entity with another', () => {
            let newEntry = {
                name: "Gosho",
                age: 23,
                birthday: new Date(1999, 0, 7)
            }
            let repository = new Repository(properties);

            repository.add(entity);
            repository.update(0, newEntry);

            expect(repository.getId(0).name).to.equal('Gosho');
        })
        it('Should throw error if update entutut with invalid id', () => {
            let repository = new Repository(properties);

            expect(() => repository.update(2, entity)).to.throw(Error, `Entity with id: 2 does not exist!`)
        })
    })
    describe('Delete', () => {
        it('Should delite valid entyty', () => {
            let repository = new Repository(properties);

            repository.add(entity);
            repository.add(entity);
            repository.del(0);

            expect(repository.count).to.equal(1);
        })
        it('Should throw error if delete entity with invalid id', () => {
            let repository = new Repository(properties);

            expect(() => repository.del(2, entity)).to.throw(Error, `Entity with id: 2 does not exist!`)
        })
    })

});
