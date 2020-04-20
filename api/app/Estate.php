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
}
