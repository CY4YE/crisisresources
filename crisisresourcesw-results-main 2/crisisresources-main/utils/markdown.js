const convertMarkdown = () => {
    let markdown_text = document.getElementById("markdown-content");
    const converter = new showdown.Converter();
    converter.setFlavor("github");
    let html = converter.makeHtml(markdown_text.innerHTML);
    console.log(html)
    markdown_text.innerHTML = html
}
convertMarkdown()