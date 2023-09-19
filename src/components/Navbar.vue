<template>
    <div class="navbar">
        <div class="navbar__links">
            <h2 @click="$router.push('/')">Ni DATЬ ne vzyatь.ru</h2>
            <router-link class="elem" to='/'>Данные с датчиков</router-link>
            <router-link class="elem"  to='/create'>Создать датчик</router-link>
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
       
    },
    methods: {
        
    }
}
</script>

<style scoped>
.navbar {
    height: 80px;
    background-color: rgb(43, 167, 160);
    box-shadow: 2px 2px 4px rgb(130, 182, 129);
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    color: rgb(7, 52, 112);
    font-family: Verdana, sans-serif;
}

.navbar__links {
    display: flex;
    text-align: center;
    align-items: center;
}

.navbar__elems {
    margin-left: auto;
    display: flex;
    text-align: center;
}

.elem {
    margin-left: 20px;
    width: 200px;
    text-decoration: none;
    color: rgb(7, 52, 112);
    font-size: 20px;
    font-family: Verdana, sans-serif;
}

h2 {
    margin-left: 10px;
}

.elem:hover,
h2:hover {
    text-decoration: underline;
    color: blue;
}

#btn {
    background-color: yellow;
}

#btn:hover {
    background-color: lightyellow;
}
</style>