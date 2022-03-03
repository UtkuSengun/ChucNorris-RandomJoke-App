<template>
    <div>



        <div style="margin:10px;border:1px solid #a0a0a0;border-radius:10px;padding:10px;">
        <fieldset>
            <legend>Random</legend>
            {{randomJoke}}
            <hr/>
            <button @click="getRandomJoke">Refresh</button>
        </fieldset>
        </div>


        <div style="margin:10px;border:1px solid #a0a0a0;border-radius:10px;padding:50px;">
            <fieldset>
                <legend>Categories</legend>
                    <ul>
                        <template v-for="(user,index) in users">
                            <user-item :user=user :key=index></user-item>
                        </template>
                    </ul> 
            </fieldset>
        </div>



        
    </div>
</template>

<script>
import axios from 'axios';
import UserItem from '../views/CategoryItem.vue'
export default {
components: { UserItem },
    name: 'Home',
    data() {
        return {
            users: [],
            randoms: [],
            randomJoke:null
        }
    },


    created() {

        this.getRandomJoke();

        axios.get('https://api.chucknorris.io/jokes/categories')
        .then(response => {
            this.users=response.data
        })
        .catch(e => {
            console.log(e)
        })
        
        /*  fetch('https://api.chucknorris.io/jokes/categories')
        .then((res) => { return res.json() })
        .then((users) => { this.users = users; }) */
    },
    methods:{
        getRandomJoke(){
            axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            this.randomJoke=response.data.value;
        })
        .catch(e => {
            console.log(e)
        })
        },
    },
    components: { UserItem }
}
</script>