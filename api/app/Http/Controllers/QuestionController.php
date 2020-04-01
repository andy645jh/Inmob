<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;

class QuestionController extends Controller
{
    public function getAll()
    {
        $questions = Question::get()->toJson(JSON_PRETTY_PRINT);
        return response($questions, 200);
    }

    public function create(Request $request) 
    {
        $question = new Question;
        $question->content = $request->content;            
        $question->answer = is_null($request->answer) ? "" : $request->answer ; 
        $question->estate_id = $request->estate_id;                    
        $question->save();
        
        return response()->json(
        [
            "message" => "Question created"
        ], 201);
    
    }

    public function getByParent($id) {
        if (Question::where('estate_id', $id)->exists()) {
            $question = Question::where('estate_id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($question, 200);
        } else {
        return response()->json([
            "message" => "Question Not found by id ".$id
        ], 404);
        }
    }

    public function get($id) {
        if (Question::where('id', $id)->exists()) {
            $question = Question::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($question, 200);
        } else {
        return response()->json([
            "message" => "Question Type not found"
        ], 404);
        }
    }

    public function update(Request $request, $id) {
        if (Question::where('id', $id)->exists()) 
        {
            $question = Question::find($id);
            $question->content = is_null($request->content) ? $question->content : $request->content;            
            $question->answer = is_null($request->answer) ? $question->answer : $request->answer;            
            $question->estate_id = is_null($request->estate_id) ? $question->estate_id : $request->estate_id; 
            $question->save();
    
            return response()->json([
                "message" => "records updated successfully ". $request->content
            ], 200);
            } else {
            return response()->json([
                "message" => "Question Type not found"
            ], 404);
            
        }
    }

    public function delete ($id) {
        if(Question::where('id', $id)->exists()) {
            $question = Question::find($id);
            $question->delete();
    
            return response()->json([
              "message" => "records deleted"
            ], 202);
          } else {
            return response()->json([
              "message" => "Question Type not found"
            ], 404);
          }
    }
}
