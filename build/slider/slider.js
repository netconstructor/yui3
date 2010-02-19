YUI.add('slider', function(Y) {

/**
 * Create a sliding value range input visualized as a draggable thumb on a
 * background rail element.
 * 
 * @module slider
 */

/**
 * Create a slider to represent an integer value between a given minimum and
 * maximum.  Sliders may be aligned vertically or horizontally, based on the
 * <code>axis</code> configuration.
 *
 * @class Slider
 * @constructor
 * @extends SliderBase
 * @uses SliderValueRange
 * @uses ClickableRail
 * @param config {Object} Configuration object
 */
Y.Slider = Y.Base.build( 'slider', Y.SliderBase,
    [ Y.SliderValueRange, Y.ClickableRail ],
    { dynamic: true } );


}, '@VERSION@' ,{requires:['slider-base', 'clickable-rail', 'int-value-range']});
