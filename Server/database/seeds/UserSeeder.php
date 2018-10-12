<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        \App\User::truncate();

        $faker = \Faker\Factory::create();

        $password = Hash::make(123456);

        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 50; $i++) {
            \App\User::create([
                'name' => $faker->sentence,
                'email' => $faker->email,
                'password' => $password
            ]);
        }
    }
}
