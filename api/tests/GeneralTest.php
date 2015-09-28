<?php

class GeneralTest extends TestCase {
    public function testRootPath() {
        $this->visit('/')
             ->see(json_encode(['status' => 'active']));
    }
}
