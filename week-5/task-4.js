function traverseDOM() {
    // Select the parent element
    const parentElement = document.getElementById('parent');
    
    // Get the first child of the parent
    const firstChild = parentElement.firstElementChild;
    console.log("First child:", firstChild.tagName);  // Should log "P"
    
    // Get the last child of the parent
    const lastChild = parentElement.lastElementChild;
    console.log("Last child:", lastChild.tagName);  // Should log "P"
    
    // Get the parent of the first child
    const parentOfFirstChild = firstChild.parentNode;
    console.log("Parent of the first child:", parentOfFirstChild.id);  // Should log "parent"
    
    // Get the next sibling of the first paragraph
    const nextSibling = firstChild.nextElementSibling;
    console.log("Next sibling of first paragraph:", nextSibling.tagName);  // Should log "P"
    
    // Get the previous sibling of the last paragraph
    const previousSibling = lastChild.previousElementSibling;
    console.log("Previous sibling of last paragraph:", previousSibling.tagName);  // Should log "DIV"
    
    // Get all children of the parent element
    const allChildren = parentElement.children;
    console.log("All children of parent:", allChildren.length);  // Should log "4"
}
