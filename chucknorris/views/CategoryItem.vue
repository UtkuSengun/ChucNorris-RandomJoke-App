<template>
    <div>
        <ul> 
            <li>
                <router-link :to="profileLink">
                    {{ user }}
                </router-link> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CategoryItem',
    props: {
        user: { type: String, required: true },
        random: {type: String, required: false}
    },
    computed: {
        profileLink() {
            
            return `/user/${this.user}`
        }
    }
}
</script>