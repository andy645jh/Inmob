<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EstateTypes extends Model
{
    protected $table = 'estate_type';
    protected $fillable = ['name'];
}
