Vue.component('custom-dropdown', {
  template: '#custom-dropdown-tpl',
  data() {
    return {
      isOpened: false,
      selected: null,
      search: ''
    }
  },
  props: {
    placeholder: {
        type: String
    },
    dropdownKey: {
        type: String,
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    onInput(value) {
      this.selected = null;
      if(!value){
          this.$emit('select-item', '');
      }
    },
    select() {
      var selectedOption = this.filteredItems[this.selected]
      if(!selectedOption){
          return;
      }
      this.$emit('select-item', selectedOption);
      this.search = (this.dropdownKey && selectedOption[this.dropdownKey]) || selectedOption;
      this.isOpened = false;
    },
    onDown() {
      if(!this.isOpened){
        return;
      }
      this.selected = (this.selected + 1) % this.filteredItems.length;
    },
    onUp() {
      if(!this.isOpened){
        return;
      }

      this.selected = this.selected -1 <0
        ? this.filteredItems.length -1
        : this.selected -1;
    }
  },
  computed: {
    filteredItems(){
        return this.options.filter(function(item){
            if(!this.search){
                return item;
            }
            return ((this.dropdownKey && item[this.dropdownKey]) || item).toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
        }.bind(this));
    }
  }
});
