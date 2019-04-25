#!/bin/bash

list=("myTableConfig.js" "myTableTemplates.js" "myTable.js" "rowClass.js" "tableClass.js" "myDataType.js" "tabPage.js" "myRowIncident.js" "myAjax.js")
src="./"
out_dir="./out/"
for file in ${list[*]}
do 
    babel $src$file -o $out_dir$file
done