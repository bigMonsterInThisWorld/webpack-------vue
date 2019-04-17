export default {
    data(){
        return {
            my_npt:''
        }
    },
    created(){
        console.log(this);
        this.my_npt = this.$attrs.value;
    },
    methods:{
        updateData(e){
            let val = e.target.value;
            this.my_npt = val;
            this.$emit('input',val);
        }
    }
}