function node(val=null,next=null) {
    let value = val
    let nextNode = next
    return {value, nextNode}
}

function linkedList() {
    let createHead = (nextNode=null) => {
        return {nextNode}
    }
    let head = createHead()
    let append = (value) => {
        let crawl = (node) => {
            if (!node.nextNode) {
                return node}
            else (crawl(node.nextNode))
        }
        if (!head.nextNode) {head.nextNode = node(value)
        return}
        else {
            console.log(crawl(head))
            console.log(crawl(head).nextNode)
            crawl(head).nextNode = node(value,null)}
    }

    let prepend = (value) => {
        if (head.nextNode !== null) {
            head.nextNode = node(value,head.nextNode)
        }
    }
    let size = () => {
        if (head.nextNode == null) return 0
        else {
            let crawl = (node,count=0) => {
                if (node.nextNode == null) return count
                else {return crawl(node.nextNode,count+1)}
            }
            return crawl(head)
        }
    }
    let tail = () => {
        let crawl = (node) => {
            if (node.nextNode == null) return node
            else {return crawl(node.nextNode)}
        }
        return crawl(head)

    }
    let at = (index) => {
        let crawl = (node,index,current=0) => {
            if (current == index) {
                return node
            }
            else {crawl(node.nextNode,index,current+1)}
        }
        crawl(head,index)
    }
    let pop = () => {
        let listLength = size()
        let newLastNode = at(listLength-1)
        newLastNode.nextNode = "null"
    }
    let contains = (value) => {
        let crawl = (node) => {
            if (node.value == value) return true
            else if (node.nextNode == null) {return crawl(node.nextNode)}
            else {return false}
        }
        crawl(head)
    }
    let find = (value) => {
        let crawl = (node) => {
            if (node.value == value) return node
            else if (node.nextNode == null) {throw console.error("Doesn't Exist");}
            else {return crawl(nextNode)}
        }
        crawl(value)
    }
    let toString = () => {
        let crawl = (node,string="") => {
            if (node.nextNode !== null) {
                let currentString = `${string}${JSON.stringify(node)}`
                return crawl(node.nextNode,currentString)
            }
            else {return string}
        }
    }

return {append,prepend,size,head,tail,at,pop,contains,find,toString}
}



