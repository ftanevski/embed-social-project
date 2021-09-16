let getForms = async () => {
    let response = await fetch('./forms.json');
    let data = await response.json();
    return data;
}

export default getForms;