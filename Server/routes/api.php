<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'api', 'middleware' => ['cors', 'api'], 'namespace' => 'API'], function()
{
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/auth', 'Auth\LoginController@authenticate');

    Route::get('/redirect', 'Auth\LoginController@redirect');
    Route::get('/callback', 'Auth\LoginController@callback');
});