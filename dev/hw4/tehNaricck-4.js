class PaginationHelper{

    constructor(arr, count){
        this.array = arr;
        this.page_count = count;
    }
    pageCount(){
        if(this.array.length%this.page_count===0){
            return this.array.length/this.page_count;
        }else{
            return parseInt(this.array.length/this.page_count)+1;
        }
    }
    itemCount(){
        return this.array.length;
    }
    pageItemCount(num){
        if(num*this.page_count>this.array.length || this.array.length===0 || num<0 || num*this.page_count===this.array.length){
            return -1;
        }
        var leave_elements = this.array.length - num*this.page_count;
        if(leave_elements>=this.page_count){
            return this.page_count;
        }else{
            return leave_elements;
        }
    }
    pageIndex(num){
        if(num>this.array.length-1 || num<0){
            return -1;
        }
        return parseInt(num/this.page_count);
    }
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.page_count());
console.log(helper.item_count());
console.log(helper.page_item_count(0));
console.log(helper.page_item_count(1));
console.log(helper.page_item_count(2));

console.log(helper.page_index(5));
console.log(helper.page_index(2));
console.log(helper.page_index(20));
console.log(helper.page_index(-10));

// helper.page_index(5) # should == 1 (zero based index)
// helper.page_index(2) # should == 0
// helper.page_index(20) # should == -1
// helper.page_index(-10) # should == -1 because negative indexes are invalid