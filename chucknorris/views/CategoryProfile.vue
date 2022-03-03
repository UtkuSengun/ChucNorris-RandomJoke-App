<template>
    <div>
        <ul>
            <li>{{ userData.value }}</li>
        </ul>
        <router-link :to="userLink">Back to user</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CategoryProfile.vue',
    data() {
        return {
            userData: {},
            categoryName:null
        }
    },
    computed: {
        userLink() {
            return `/`
        }
    },
    created() {

        axios.get('https://api.chucknorris.io/jokes/random?', { params: { category:this.$route.params.key } }) 
        .then(response => {
            this.userData=response.data
        })
        .catch(e => {
            console.log(e)
        })

        /*
        this.categoryName = this.$route.params.key;
        fetch(`https://api.chucknorris.io/jokes/random?category=` +this.categoryName)
        .then((res) => { return res.json() })
        .then((data) => { this.userData = data; })*/ 
    }
}
</script>