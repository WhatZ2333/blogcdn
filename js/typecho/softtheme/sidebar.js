let color_array = ["#00bbf0", "#8c82fc", "#ff6f3c", "#55e9bc", "#ff6464", "#769fcd", "#8c82fc"];

let span = document.querySelectorAll(".category-list span");
let index_j = 0;
for (let index = 0; index < span.length; index++) {
    let span_item = span[index];
    if(index_j >= color_array.length){
        index_j = 0;
    }
    span_item.style.backgroundColor = color_array[index_j];
    index_j++;
}

let tag_span = document.querySelectorAll(".tags-list span");
let index_i = 0;
for (let j = 0; j < tag_span.length; j++) {
    let tag_item = tag_span[j];
    if(index_i >= color_array.length){
        index_i = 0;
    }
    tag_item.style.backgroundColor = color_array[index_i];
    index_i++;
}
