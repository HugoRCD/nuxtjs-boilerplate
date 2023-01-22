<template>
  <div>
    <input type="file" ref="fileInput" />
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script setup lang="ts">

const supabase = useSupabaseClient();

const fileInput = ref(null);

const uploadImage = async () => {
  if (fileInput.value.files.length === 0) return;
  const avatarFile = fileInput.value.files[0];
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload("avatar-" + Math.random() + ".png", avatarFile);
  if (error) console.log("Error uploading file: ", error);

  if (data) {
    const { data: { publicUrl } } = supabase.storage
      .from("avatars").getPublicUrl(data.path);
    console.log(publicUrl);
  }
  fileInput.value.value = null;
};
</script>