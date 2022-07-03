<template>
    <div>
        <div class="container_nav">
           <nav class="nav">
                <li class="nav_item">
                    <router-link class="nav_items" :to="{name : 'Home'}">
                        Home
                    </router-link>
                </li> 
                <li class="nav_item">
                    <router-link class="nav_items" :to="{name : 'Login'}">
                        Login
                    </router-link>
                </li>
           </nav>
        </div>
    </div>
</template>

<script>
export default {
    name:"nav_file",



}
</script>

<style scroped>
*{
    margin: 0; padding: 0;
}
.container_nav{
    height: 10vh;
    background-color: rgba(240, 240, 240,.5);
    display: flex; justify-content: start; align-items: center;
}
.nav{
    display: flex;
    margin-left: 2rem;
}
.nav_item{
    list-style: none;
    margin: 0 1rem;
    cursor: pointer;
}
.nav_items{
    text-decoration: none;
}
</style>