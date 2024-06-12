class first{
  a:string
  hello(){
    console.log(this.a)
    return "hello manu"
  }
}
const f:first=new first()
f.a="manu";
f.hello()
console.log(f.a)
