imageWall is a [jQuery](http://jquery.com) plugin that makes it easy to turn lists of images into a pretty image wall complete with additional content panels which display on mouseover of the taregt image element.


## Dependencies

### [jQuery](http://jquery.com/) ###


## Usage

### [imageWall Demo](http://lab.neo-pangea.com/experiments/jquery-imagewall/)

In the &lt;head&gt; of your document, link both jQuery and imageWall.

```html
<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/jquery.imagewall.js"></script>
```

Create your list of images HTML markup.

```html
<ul id="gallery-3" class="imageWall">
	<li><a href="media/images/scarlett.jpg"><img src="media/images/scarlett_thm.jpg" width="160" height="120" alt="Scarlett Johansson" title="Click to view this image" border="0" /></a></li>
	<li><a href="media/images/elisha.jpg"><img src="media/images/elisha_thm.jpg" width="160" height="120" alt="Elisha Cuthbert" title="Click to view this image" border="0" /></a></li>
	<li><a href="media/images/natalie.jpg"><img src="media/images/natalie_thm.jpg" width="160" height="120" alt="Natalie Portman" title="Click to view this image" border="0" /></a></li>
	<li><a href="media/images/carmen.jpg"><img src="media/images/carmen_thm.jpg" width="160" height="120" alt="Carmen Electra" title="Click to view this image" border="0" /></a></li>
</ul>
```

Then in your javascript... Once that's done you're good to go.

```javascript
$("#gallery-3").imageWall({
	showNumbers: true,
	showCaptions: true
});
```

## Documentation

### imageWall()

Add an item to the list of parallaxing layers. Ranges are centered at the items start location. For example, an item with a 20px range will be able to move 10px forward and 10px backward from its start location.

__Parameters__

`showNumbers` &mdash; boolean: display image numbering (default: true).

`showCaptions` &mdash; boolean: display image captions (default: true).