<template>
    <div>
        <div class="list">
            <h1>Lista de Itens</h1>
            <div class="item" v-for="(item, i) in items" :key="item.id">
                <span class="itemCheckbox">
                    <input type="checkbox" :checked="item.done" v-on:click="toogleCheck(i)"> {{item.name}}
                </span>
                <span class="itemRemove">
                    <input type="button" value="x" title="Remover" v-on:click="removeItem(item.name, item.id)">
                </span>
                <br>
            </div>
        </div>
        <p />
        <p />
        <hr>
        <div class="newItem">
            <h1>Cadastrar Novo Item</h1>
            <br>
            <form v-on:submit.prevent="newItem">
                Nome: <input type="text" v-model="item.name">
                <br>
                <br>
                <button>Cadastrar</button>
            </form>
        </div>
    </div>

</template>

<script>
import itemsService from '@/service/items'
export default {
    name: 'items',
    data() {
        return {
            items: [],
            item:{
                done: false,
                name: ''
            }
        }
    },
    methods: {
        toogleCheck(index) {
            itemsService.toogleCheck(this.items[index].id)
        },

        newItem() {
            let newItems = itemsService.addItem(this.item)
            newItems
                .then((data) => {
                    this.items = data
                    this.item = {
                        name: '',
                        done: false
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        removeItem(name, id) {
            if (confirm('Deseja remover o item: ' + name + ' ?')) {
                let newItems = itemsService.removeItem(id)
                newItems
                    .then((data) => {
                        this.items = data
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            }
        }
    },
    created() {
        let then = itemsService.listItens()
        then.then((data) => {
            this.items = data
        })
    }
}
</script>

<style>
.list {
    text-align: left;
    padding: 5px;
}

.newItem {
    text-align: left;
}

.item {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
}

.itemCheckbox {
    width: 30%;
}

.itemRemove {
    width: 15%;
}
</style>