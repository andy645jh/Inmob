<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EstateTypes;

class EstateTypesController extends Controller
{
    public function getAll()
    {
        $estateTypes = EstateTypes::get()->toJson(JSON_PRETTY_PRINT);
        return response($estateTypes, 200);
    }

    public function create(Request $request) 
    {
        $estateType = new EstateTypes;
        $estateType->name = $request->name;        
        $estateType->save();

        return response()->json(
        [
            "message" => "Estate Type created"
        ], 201);
    
    }

    public function get($id) {
        if (EstateTypes::where('id', $id)->exists()) {
            $estateType = EstateTypes::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($estateType, 200);
        } else {
        return response()->json([
            "message" => "Estate Type not found"
        ], 404);
        }
    }

    public function update(Request $request, $id) {
        if (EstateTypes::where('id', $id)->exists()) {
            $estateType = EstateTypes::find($id);
            $estateType->name = is_null($request->name) ? $estateType->name : $request->name;            
            $estateType->save();
    
            return response()->json([
                "message" => "records updated successfully ". $request->name
            ], 200);
            } else {
            return response()->json([
                "message" => "Estate Type not found"
            ], 404);
            
        }
    }

    public function delete ($id) {
        if(EstateTypes::where('id', $id)->exists()) {
            $estateType = EstateTypes::find($id);
            $estateType->delete();
    
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
