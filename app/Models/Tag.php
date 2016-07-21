<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'name'
    ];

    /**
     * @Relation
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'posts_tags')->orderBy('created_at', 'DESC');
    }
    /**
     * @Relation
     */
    public function auto_tags()
    {
        return $this->belongsToMany(Post::class, 'auto_tags', 'tag_id', 'auto_tag_id');
    }
    /**
     * @Relation
     */
    public function type()
    {
        return $this->belongsTo(TagType::class, 'tag_type_id');
    }
}
