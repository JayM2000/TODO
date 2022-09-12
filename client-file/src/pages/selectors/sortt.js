

export default (exp,{ text,sort }) => {
    return exp.filter((ele) => {
        const textt = ele.desc.toLowerCase().includes(text.toLowerCase());
        return textt;
    }).sort((a,b)=>{
        if(sort === 'amt') {
            return a.amt < b.amt ? 1 : -1;
        }
        else {
            if(sort === 'id') {
            return a.id < b.id ? 1: -1;
        }
    }
    });
};