(function() {

    function walk(node) 
    {
        // The last guy stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\bnew study\b/g, "Tumblr post");
        v = v.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bSpace\b/g, "SPAAACE");
        v = v.replace(/\bspace\b/g, "SPAAACE");
        v = v.replace(/\bSPACE\b/g, "SPAAACE");
        v = v.replace(/\bGoogle Glass\b/g, "virtual boy");
        v = v.replace(/\bGoogle glass\b/g, "virtual boy");
        v = v.replace(/\bgoogle glass\b/g, "virtual boy");
        v = v.replace(/\bgoogle Glass\b/g, "virtual boy");
        v = v.replace(/\bSmartphone\b/g, "Pokedex");
        v = v.replace(/\bsmartphone\b/g, "Pokedex");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bSenator\b/g, "Elf-Lord");
        v = v.replace(/\bsenator\b/g, "Elf-Lord");
        v = v.replace(/\bCar\b/g, "Cat");	
        v = v.replace(/\bcar\b/g, "cat");	
        v = v.replace(/\bElection\b/g, "Eating contest");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bCongressional leaders\b/g, "River Spirits");
        v = v.replace(/\bcongressional leaders\b/g, "river spirits");
        v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");	
        v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");	
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // I guess this is a thing I need?
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
