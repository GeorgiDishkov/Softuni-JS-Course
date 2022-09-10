

export function takeInfo(formInfo) {
    let dataForm = new FormData(formInfo);
    let title = dataForm.get(`topicName`)
    let username = dataForm.get(`username`)
    let comment = dataForm.get(`postText`)
    let info = [title, username, comment]
    if (title, username, comment) {
        return (info);
    } else {
        return (undefined);
    }
}