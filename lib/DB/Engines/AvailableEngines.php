<?php
/**
 * @copyright 2008-2021 Julian Bogdani
 * @license AGPL-3.0; see LICENSE
 */

namespace DB\Engines;

class AvailableEngines
{
    private static $engines = [
        'sqlite',
        'mysql',
        'pgsql'
    ];

    public static function getList()
    {
        return self::$engines;
    }

    public static function isValidEngine(string $engine)
    {
        return in_array($engine, self::$engines);
    }
}