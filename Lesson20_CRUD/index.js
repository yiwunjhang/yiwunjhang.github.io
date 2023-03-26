var arr = [
    {
        id: 1,
        name: 'TestOne'
    },
    {
        id: 2,
        name: 'TestTwo'
    }
]
let editId = '';
const isEdit =(id,name)=> {
    if (editId === id){
        return `<input id="input${id}" value="${catchName}"/> 
                <button id="submit${id}" class="submit-btn">確　認</button>`;
    }
    else{
        return `<li>
                    ${name}
                    <button id="edit${id}" class="edit-btn">編　輯</button>
                    <button id="delete${id}" class="delete-btn">刪　除</button>
                </li>`;
    }
};

let catchName = '';
const render =()=>{
    // 渲染用
    const target = document.getElementById('list');
    const model = arr.map(item => {
        return isEdit(item.id,item.name);
    }).join('');
    target.innerHTML = model;

    // 刪除
    arr.forEach(item =>{
        const deleteTarget = document.getElementById(`delete${item.id}`);
        if (deleteTarget){
            deleteTarget.addEventListener('click',()=>{
                //console.log(arr.filter(p => p.id !== item.id));
                arr = arr.filter(p => p.id !== item.id);
                render();
            });
        }

    });

    // 編輯
    arr.forEach(item => {
        const editTarget = document.getElementById(`edit${item.id}`)
        if (editTarget){
            editTarget.addEventListener('click',()=>{
                editId = item.id;
                catchName = item.name;
                render();
            });
        }
    });

    // 更新
    arr.forEach(item => {
        const target = document.getElementById(`submit${item.id}`);
        // console.log(target);
        if (target) {
            target.addEventListener('click', ()=> {
                if (item.id === editId){
                    //console.log(`input${item.id}`)
                    const input = document.getElementById(`input${item.id}`);
                    item.name = input.value;
                    //console.log(input.name);

                    editId = '';
                }
                render();
            });
        }
    });

}
render();

//let uuid = self.crypto.randomUUID();
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click',()=>{
    arr.push({
        id: self.crypto.randomUUID(),
        name: self.crypto.randomUUID().substring(0,7)
    });
    render();
});

