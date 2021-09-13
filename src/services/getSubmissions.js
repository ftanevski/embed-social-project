let getSubmissions = async () => {
    let response = await fetch('../assets/json/submissions.json');
    let submissions = await response.json();
    return submissions; 
}

export default getSubmissions;