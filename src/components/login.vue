<template >
    <div id="log_file">
            <div class="box_log main_box" v-if="istrue">
                <input type="text" placeholder="user name ">
                <input type="email" placeholder="user email ">
                <input type="password" placeholder="password ">
                <input type="password" placeholder="password ">
                <div>
                    <button>Login </button>
                    <button @click="change" class="sin">Singin </button>
                </div>
            </div>
              <div class="box_sing main_box" v-if="!istrue">
                <input type="text" placeholder="user name ">
                <input type="password" placeholder="password ">
                <div>
                    <button @click="change" class="log">Login </button>
                     <button>Singin </button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"log_file",

    data() {
        return {
            istrue:true,
        }
    },
    
    methods: {
        change(){
            this.istrue = !this.istrue;
            console.log(true);
        }
     },

}
</script>

<style scoped>
#log_file{
    height: 90vh;
    background-image: url("../assets/img1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    display: flex; justify-content: center; align-items: center;
}
.main_box{
    width: 50%; height: 50%;
    background: rgba(226, 226, 226,.5);
    display: flex; flex-direction: column; justify-content: space-around;
    align-items: center;
}
input{
    width: 70%;
    padding: .5rem 1rem;
    border: none; outline: none; 
    font-size: .9rem;
    font-weight: bolder;
}
button{
    outline: none; border: none;
    padding: .5rem;
    margin: 0 .5rem;
    cursor: pointer;
    font-size: 1rem;
}
.log{
    background-color: rgb(199, 77, 77);
}
.sin{
    background-color: rgb(53, 214, 53);
}
</style>
    
