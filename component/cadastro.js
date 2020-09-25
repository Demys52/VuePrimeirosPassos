var cadastro = Vue.component('cadastro', {
    template: '#cadastro',
    methods:{
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
    }
});