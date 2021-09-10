let getSubmissions = async () => {
    const response = await fetch('../assets/json/submissions.json');
    const data = response.json();
    return data;
}

export default getSubmissions;