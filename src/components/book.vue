<template>
    <div id="book_fiel">
            <div class="box_book">
                <div class="side">
                    <input  class="style_input" type="text" placeholder="User naem .....">
                    <input  class="style_input" type="address" placeholder="User Address .....">
                    <select class="style_input" @change="checkValue">

                        <option value="Selected">Please state - country  .....</option>
                        <option value="iran">Iran</option>
                        <option value="english">England</option>
                        <option value="germanny">Germanny</option>

                    </select>
                </div>
                <div class="side">

                    <input  class="style_input" type="password" placeholder="User password .....">
                    <input  class="style_input" type="email" placeholder="User email .....">

                    <select class="style_input" >

                        <option v-for="city in main_city" :key="city">
                            {{city}}
                        </option>
                       

                    </select>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"book_fiel",
    data() {
        return {
            cityes:{
                iran:["Mashad","Theran","Esfehan","Yaze"],
                english:["city1","city2","city3","city4"],
                germanny:["city5","city6","city7","city8    "],
            },
            main_city:[],
        }
    },

    methods: {
        checkValue(e){
            console.log(this.cityes[e.target.value]);
            this.main_city = this.cityes[e.target.value]
        }
    },
}
</script>

<style scoped>
*{
    margin: 0; 
    padding: 0;
}
#book_fiel{
    height: 90vh;
    background-image: url("../assets/img2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    display: flex; justify-content: center; align-items: center;
}
.box_book{
    width: 80%;
    height: 60%;
    background: rgba(243, 243, 243,.3);
    display: flex;
}
.side{
    width: 50%; height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.style_input{
    border: none;
    outline: none;
    width: 70%;
    padding: 1rem .5rem;        
    font-weight: bolder;
}
.side{
    width: 50%; height: 100%;
}
</style>
    
