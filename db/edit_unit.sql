update selected_units
set name = $2,
   quantity = $3
where id = $1;