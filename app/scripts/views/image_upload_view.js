LandingEmber.ImageUploadView = Ember.TextField.extend({
    type: 'file',

    change: function(evt) {
        var input = evt.target;
        if (input.files && input.files[0]) {
            var self = this;

            var reader = new FileReader();
            reader.onload = function(e) {
                var data = e.target.result;
                self.set('parentView.content', data);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
});