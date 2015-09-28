<?php

class ExampleTest extends TestCase {
    public function rootPath() {
        $this->visit('/')
             ->see(json_encode(['status' => 'active']));
    }
}
