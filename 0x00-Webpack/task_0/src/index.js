import $ from 'jquery';

function addParagraphs() {
    const body = $('body');
    
    const paragraphs = [
        'Holberton Dashboard',
        'Dashboard data for the students',
        'Copyright - Holberton School'
    ];

    paragraphs.forEach(paragraphText => {
        const paragraph = `<p>${paragraphText}</p>`;
        body.append(paragraph);
});
}

$(document).ready(addParagraphs);