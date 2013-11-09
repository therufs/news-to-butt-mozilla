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
        v = v.replace(/\bNew studies\b/g, "Tumblr posts");
        v = v.replace(/\bnew studies\b/g, "Tumblr posts");
        v = v.replace(/\bNEW STUDIES\b/g, "TUMBLR POSTS");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\bnew study\b/g, "Tumblr post");
        v = v.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
        v = v.replace(/\bRebuilding\b/g, "Avenging");
        v = v.replace(/\brebuilding\b/g, "avenging");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bRebuilds\b/g, "Avenges");
        v = v.replace(/\brebuilds\b/g, "avenges");
        v = v.replace(/\bRebuilt\b/g, "Avenged");
        v = v.replace(/\brebuilt\b/g, "avenged");
        v = v.replace(/\bSpace/g, "SPAAACE");
        v = v.replace(/\bspace/g, "SPAAACE");
        v = v.replace(/\bSPACE/g, "SPAAACE");
        v = v.replace(/\bGoogle Glass/g, "virtual boy");
        v = v.replace(/\bGoogle glass/g, "virtual boy");
        v = v.replace(/\bgoogle glass/g, "virtual boy");
        v = v.replace(/\bgoogle Glass/g, "virtual boy");
        v = v.replace(/\bSmartphone/g, "Pokedex");
        v = v.replace(/\bsmartphone/g, "Pokedex");
        v = v.replace(/\bElectric/g, "Atomic");
        v = v.replace(/\belectric/g, "atomic");
        v = v.replace(/\bSenator/g, "Elf-Lord");
        v = v.replace(/\bsenator/g, "Elf-Lord");
        v = v.replace(/\bCar/g, "Cat");	
        v = v.replace(/\bcar/g, "cat");	
        v = v.replace(/\bElection/g, "Eating contest");
        v = v.replace(/\belection/g, "eating contest");
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
