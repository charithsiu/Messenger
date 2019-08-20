<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    
            <b-container fluid>
                <b-row class="mt-2">
                    <b-col sm="2">
                        <label for="textarea-small">Your Name:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
                    </b-col>
                </b-row>
    
                <b-row class="mt-2">
                    <b-col sm="2">
                        <label for="textarea-small">Your Email:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email" description="We'll never share your email with anyone else."></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col sm="2">
                        <label for="textarea-state">Message:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-textarea id="textarea-state" v-model="form.text" :state="form.text.length >= 1" placeholder="Enter your message" rows="3"></b-form-textarea>
                    </b-col>
                </b-row>
    
                <b-row class="mt-2">
                    <b-col sm="2"></b-col>
                    <b-col sm="1">
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-col>
                    <b-col sm="1">
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-form>
    </div>
</template>

<script>
import ContactusService from '@/services/ContactusService'
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                text: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            //alert(JSON.stringify(this.form))
            ContactusService.insertPost(this.form);
      
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.text = ''
            this.show = false
        this.$nextTick(() => {
          this.show = true
        })
        }
    }
}
</script>