<template id="vote">
    <v-ons-page id="vote" class="vote">
        <!--<ons-gesture-detector>-->

            <!--&lt;!&ndash;<div id="love" class="dropzone"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div id="dislike" class="dropzone"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div id="like" class="dropzone"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div id="hate" class="dropzone"></div>&ndash;&gt;-->
        <!--</ons-gesture-detector>-->
            <!--<img id="yes-drop" :src="url" class="draggable drag-drop">-->

        <img id="yes-drop" :src="url" class="draggable drag-drop">

        <div id="outer-dropzone" class="dropzone">
            #outer-dropzone
            <div id="love-dropzone" class="dropzone">#love-dropzone</div>
            <div id="dislike-dropzone" class="dropzone">#dislike-dropzone</div>
            <div id="like-dropzone" class="dropzone">#like-dropzone</div>
            <div id="hate-dropzone" class="dropzone">#hate-dropzone</div>
        </div>
    </v-ons-page>
</template>
<script>
    import {use} from 'vue-supply'
    import Topics from '../supplies/topics'
    import interact from 'interactjs'

//    document.addEventListener('dragleft', function(event) {
//        if (event.target.matches('#detect-area')) {
////            console.log('dragleft is detected.', event);
//        }
//    });
//
//    document.addEventListener('dragright', function(event) {
//        if (event.target.matches('#detect-area')) {
////            console.log('dragRight is detected.', event);
//        }
//    });
//
//    document.addEventListener('dragup', function(event) {
//        if (event.target.matches('#detect-area')) {
////            console.log('dragUp is detected.', event);
//        }
//    });
//
//    document.addEventListener('dragdown', function(event) {
//        if (event.target.matches('#detect-area')) {
////            console.log('dragDown is detected.', event);
//        }
//    });
    export default {
        // Will automatically start and stop the necessary subscriptions
        mixins: [use(Topics)],
        data(){
            return{
                url:'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header'
            }
        },

        computed: {
            topics () {
                return Topics.topicsList
            },
            currentTopic(){
                return Topics.topicsList[Math.floor(Math.random() * Topics.topicsList.length)]
            }
        },
        created(){
            // target elements with the "draggable" class
            interact('.draggable')
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    restrict: {
                        restriction: "parent",
                        endOnly: true,
                        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                    },
                    // enable autoScroll
                    autoScroll: true,

                    // call this function on every dragmove event
                    onmove: dragMoveListener,
                    // call this function on every dragend event
                    onend: function (event) {
                        var textEl = event.target.querySelector('p');

                        textEl && (textEl.textContent =
                            'moved a distance of '
                            + (Math.sqrt(event.dx * event.dx +
                                event.dy * event.dy)|0) + 'px');
                    }
                });

            function dragMoveListener (event) {
                var target = event.target,
                    // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // translate the element
                target.style.webkitTransform =
                    target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }

            // this is used later in the resizing and gesture demos
            window.dragMoveListener = dragMoveListener;
            // enable draggables to be dropped into this
            interact('.dropzone').dropzone({
                // only accept elements matching this CSS selector
                accept: '#yes-drop',
                // Require a 75% element overlap for a drop to be possible
                overlap: 0.75,

                // listen for drop related events:

                ondropactivate: function (event) {
                    // add active dropzone feedback
                    event.target.classList.add('drop-active');
                },
                ondragenter: function (event) {
                    var draggableElement = event.relatedTarget,
                        dropzoneElement = event.target;

                    // feedback the possibility of a drop
                    dropzoneElement.classList.add('drop-target');
                    draggableElement.classList.add('can-drop');
                    draggableElement.textContent = 'Dragged in';
                },
                ondragleave: function (event) {
                    // remove the drop feedback style
                    event.target.classList.remove('drop-target');
                    event.relatedTarget.classList.remove('can-drop');
                    event.relatedTarget.textContent = 'Dragged out';
                },
                ondrop: function (event) {
                    event.relatedTarget.textContent = 'Dropped';
                },
                ondropdeactivate: function (event) {
                    // remove active dropzone feedback
                    event.target.classList.remove('drop-active');
                    event.target.classList.remove('drop-target');
                }
            });
        }
    }
</script>
<style>

    #drag-me::before {
        content: "#" attr(id);
        font-weight: bold;
    }
    #outer-dropzone {
        height: 140px;
    }

    #love-dropzone, #dislike-dropzone, #like-dropzone, #hate-dropzone {
        height: 80px;
    }

    .dropzone {
        background-color: #ccc;
        border: dashed 4px transparent;
        border-radius: 4px;
        margin: 10px auto 30px;
        padding: 10px;
        width: 80%;
        transition: background-color 0.3s;
    }

    .drop-active {
        border-color: #aaa;
    }

    .drop-target {
        background-color: #29e;
        border-color: #fff;
        border-style: solid;
    }

    .drag-drop {
        display: inline-block;
        min-width: 40px;
        padding: 2em 0.5em;

        color: #fff;
        background-color: #29e;
        border: solid 2px #fff;

        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);

        transition: background-color 0.3s;
    }

    .drag-drop.can-drop {
        color: #000;
        background-color: #4e4;
    }

</style>