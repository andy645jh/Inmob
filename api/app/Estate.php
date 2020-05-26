<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estate extends Model
{
    protected $table = 'estate';
    protected $fillable = [       
        'neighborhood', 
        'description',
        'price',
        'admin_price',
        'rooms',
        'garage',
        'parkin_lot',
        'operation',
        'meters',
        'estate_type_id',
        'publish_date'
    ];  
    
    public function scopeWord($query,$word)
    {
        return $query->where('description', 'like', "%$word%")
        ->orWhere('neighborhood', 'like', "%$word%");
    }

    public function scopePrice($query,$price)
    {
        if( $price["max"]>$price["min"] )
        {
            return $query->whereBetween('price', [$price["min"],$price["max"]] );
        }else{
            return $query->where('price', '>', $price["min"]);
        }        
    }

    public function scopeRooms($query,$rooms)
    {       
        return $query->where('rooms', '>=', $rooms);       
    }
}
