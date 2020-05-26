<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Estate;

class EstateController extends Controller
{
    public function getAll()
    {
        $estates = Estate::get()->toJson(JSON_PRETTY_PRINT);
        return response($estates, 200);
    }

    public function create(Request $request) 
    {
        $estate = new Estate;
        $estate->publish_date = new DateTime();
        $estate->neighborhood = $request->neighborhood;            
        $estate->description = $request->description;            
        $estate->price = $request->price;            
        $estate->admin_price = is_null($request->adminPrice) ? 0 : $request->adminPrice; 
        $estate->rooms = is_null($request->rooms) ? 0 : $request->rooms; 
        $estate->garage = $request->hasGarage; 
        $estate->parkin_lot = $request->hasParkinLot; 
        $estate->operation = $request->operation; 
        $estate->meters = $request->meters; 
        $estate->estate_type_id = $request->estate_type_id;                    
        $estate->save();

        return response()->json(
        [
            "message" => "Estate was created"
            //"message" => $request->all()
        ], 201);
    
    }


    public function search(Request $request)
    {
        $word = $request->word;
        $city = $request->city;
        $departament = $request->departament;
        $estateType = $request->estateType;
        $operation = $request->operation;
        $order = $request->order;
        $price = $request->price;
        $rooms = $request->rooms;

        $queryData = Estate::where('id', '>', 0);
        
        if(!is_null($price))
        {            
            $queryData = $queryData->price($price);
        }  

        if(!is_null($city) && $city!=0)
        {
            $queryData = $queryData->where('city', '=', $city);
        }

        if(!is_null($departament) && $departament!=0)
        {
            $queryData = $queryData->where('departament', '=', $departament);
        }
           
        if(!is_null($operation) && $operation!=0)
        {
            $queryData = $queryData->where('operation', '=', $operation);
        }

        if(!is_null($estateType) && $estateType!=0)
        {
            $queryData = $queryData->where('estate_type_id', '=', $estateType);
        }                  
                        
        if(!is_null($word))
        {            
            $queryData = $queryData->word($word);
        }                                                                                                                                                                       

        $queryData = $queryData->rooms($rooms);

        // mostrar la consulta $queryData->toSql()
        $opt = strpos($order, 'desc') ? 'desc' : 'asc'; 
        $cond = strpos($order, 'price') == 0 ? 'price' : 'publish_date';
                             
        $queryData->orderBy($cond, $opt);
        
        
        $result = $queryData->get();
        return response($result, 200);
    }

    public function get($id) {
        if (Estate::where('id', $id)->exists()) {
            $estate = Estate::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($estate, 200);
        } else {
        return response()->json([
            "message" => "Estate Type not found"
        ], 404);
        }
    }

    public function update(Request $request, $id) {
        if (Estate::where('id', $id)->exists()) 
        {
            $estate = Estate::find($id);
            $estate->neighborhood = is_null($request->neighborhood) ? $estate->neighborhood : $request->neighborhood;            
            $estate->description = is_null($request->description) ? $estate->description : $request->description;            
            $estate->price = is_null($request->price) ? $estate->price : $request->price;            
            $estate->admin_price = is_null($request->adminPrice) ? $estate->admin_price : $request->adminPrice; 
            $estate->rooms = is_null($request->rooms) ? $estate->rooms : $request->rooms; 
            $estate->garage = is_null($request->hasGarage) ? $estate->garage : $request->hasGarage; 
            $estate->parkin_lot = is_null($request->hasParkinLot) ? $estate->parkin_lot : $request->hasParkinLot; 
            $estate->operation = is_null($request->operation) ? $estate->operation : $request->operation; 
            $estate->meters = is_null($request->meters) ? $estate->meters : $request->meters; 
            $estate->estate_type_id = is_null($request->estate_type_id) ? $estate->estate_type_id : $request->estate_type_id; 
            $estate->save();
    
            return response()->json([
                "message" => "records updated successfully ". $request->description
            ], 200);
            } else {
            return response()->json([
                "message" => "Estate Type not found"
            ], 404);
            
        }
    }

    public function delete ($id) {
        if(Estate::where('id', $id)->exists()) {
            $estate = Estate::find($id);
            $estate->delete();
    
            return response()->json([
              "message" => "records deleted"
            ], 202);
          } else {
            return response()->json([
              "message" => "Estate Type not found"
            ], 404);
          }
    }
}
