<template>
  <v-row justify="center" align="center" style="background-color: #fcf6ef">
    <v-col cols="12" sm="8" md="10">
      <v-form ref="form" align="center" class="formrun mt-5" action="https://form.run/api/v1/r/bnyey0qcsd40y5r2jr5162c6" method="post" @submit="post">
        <v-text-field
         label="お名前"
         class="mt-3"
         v-model="name"
         :error-messages="isErrorMessage"
        />
        <v-text-field
         label="メールアドレス"
         class="mt-3"
         v-model="email"
         :rules="emailRules"
        />
        <v-text-field
         label="ブログ・サイトURL"
         class="mt-3"
         v-model="blog"
        />
        <v-text-field
         label="件名"
         class="mt-3"
         v-model="subject"
         :rules="formRules"
        />
        <v-textarea
         label="メッセージ本文"
         class="mt-3"
         v-model="message"
         :rules="formRules"
        />
        <v-btn x-large class="mt-5 font-weight-bold white--text" type="submit" style="background-color: #fb8c1a">
          送信する
        </v-btn>
      </v-form>
      <p>name: {{ name }}</p>
      <p>email: {{ email }}</p>
      <p>blog: {{ blog }}</p>
      <p>subject: {{ subject }}</p>
      <p>message: {{ message }}</p>
      <!-- <v-form ref="form" class="formrun" action="https://form.run/api/v1/r/n1qq82h6l6j54mp4cnsg7mq7" method="post" @submit="validate">
        <v-text-field
          class="mb-8"
          label="お名前"
          :rules="rules.name"
          placeholder="テスト太郎"
        />
        <v-btn large color="primary" class="font-weight-bold" type="submit">
	        <v-icon left>
	          mdi-send
          </v-icon>
          送信する
        </v-btn>
      </v-form> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return{
      name: '',
      email: '',
      blog: '',
      subject: '',
      message: '',
      isErrorMessage: [],
      formRules: [
        value => !!value || "必ず入力してください。"
      ],
      emailRules: [
        value => !!value || "必ず入力してください。",
        value => /.+@.+/.test(value) || "有効なメールアドレスを記入してください。",
      ]
    }
  },

  watch: {
    name: function (value) {
      this.validation(value)
    }
  },

  methods: {
    validation(value) {
      if (!value) {
        this.isErrorMessage = [ '必ず入力してください。' ]
      } else {
        this.isErrorMessage = []
      }
    },

    post() {
      if (this.name == '' || this.email == '' || this.blog == '' || this.subject || '' || this.message == '') {
        console.log("out")
        event.preventDefault()
      } else {
        console.log("else")
      }
    },
  },
}
</script>
