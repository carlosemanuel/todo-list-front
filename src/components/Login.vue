<template>
  <div>
    <span class="alert">{{message}}</span>
    <br>
    <br>
    <br>
    <form v-on:submit.prevent="login">
        E-mail: <input type="email" placeholder="E-mail" v-model="email">
        <br>
        <br>
        Senha: <input type="password" placeholder="Senha" v-model="password">
        <br>
        <br>
        <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import auth from '../service/auth'

export default {
    name: 'login',
    data() {
        return {
            message: '',
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            let response = auth.login(this.email, this.password);

            response.then((data) => {
                let token = data.token
                auth.setUser(token)
                this.$router.replace('/items');
            }).catch(() => {
                this.message = 'Usuário/Senha inválido'
            })
        },
    }
}
</script>

<style>
    .alert {
        color: red;
    }
</style>