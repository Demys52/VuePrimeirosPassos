var app = new Vue ({
    el:     '#app',
    router: router,
    data:   {
        cnpj: "",
        resultado: ""
    },
    methods:{
        consultaRest(){
            fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then((response) => {
            this.resultado = response;
            console.log(response);
            });
        },
        postRest(){
            fetch('http://rest.learncode.academy/api/johnbob/friends', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({name: "Superman", age: 36}),
            })
              .then(response => response.json())
              .then((response) => {
                    console.log("You saved this item", response);
            });
        },
        putRest(){ //alterar
            fetch('http://rest.learncode.academy/api/johnbob/friends/5ac29306272a180100ebc760', {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({name: "Batman", age: 36}),
            })
            .then((response) => {
                console.log("Update success!", response.status);
            });
        },
        deleteRest(){
            fetch('http://rest.learncode.academy/api/johnbob/friends/5ac29306272a180100ebc760', {
                method: "DELETE",
            })
            .then((response) => {
                console.log("Deleted!", response.status);
            });
        }
    },
    /*
            //EXECUTAR AO ABRIR A PÁGINA
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((response) => {
            this.resultado = response;
        });
    }*/
});