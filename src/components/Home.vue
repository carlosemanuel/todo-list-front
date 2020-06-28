<template>
  <div>
        <div class="menu">
            <div class="name">
                {{userName}}({{userEmail}})
            </div>
            <div class="links">
                <a href="#" class="link" v-on:click="items">Lista</a> | 
                <a href="#" class="link" v-on:click="sobre">Sobre</a> | 
                <a href="#" class="link" v-on:click="logout">Sair</a>
            </div>
        </div>
        <br>
        <div class="home">
            <router-view :key="$route.fullPath"></router-view>
        </div>
        
  </div>
</template>

<script>
import auth from '@/service/auth'

export default {
    name: 'home',
    data() {
        return {
            userName: '',
            userEmail: ''
        }
    },
    methods: {
        logout() {
            auth.logout()
            this.$router.replace('/')
        },

        sobre() {
            this.$router.replace('/about')
        },

        items() {
            this.$router.replace('/items')
        }
    },
    created() {
        let user = auth.getUser()
        this.userName = user.name
        this.userEmail = user.email
    }
}
</script>

<style>
.menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 3px 0px #ccc;
    padding: 5px;
}

.link {
    text-decoration: none;
}

a.link:visited {
    color: #666
}

.home {
    margin: 8px;
}

.name {
    margin-left: 8px;
}

.links {
    margin-right: 15px;
}
</style>