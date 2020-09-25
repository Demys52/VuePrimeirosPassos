var consulta = Vue.component('consulta', {
    template: '#consulta',
    data() {
        return {
            resultado: ""
        };
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
    }
});