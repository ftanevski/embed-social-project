<template>
    <div class="row">
        <div class="col-md-1">
            <p class="text-muted">Name</p>
            <div class="font-w600">
                {{ row.name }}
            </div>
        </div>
        <div class="col-md-2">
            <p class="text-muted">Email</p>
            <div class="font-w600">
              {{ row.email }}
            </div>
        </div>
        <div class="col-md-2">
            <p class="text-muted">Recommendation</p>
            <div class="font-w600">
              {{ row.recommendation }}
            </div>
        </div>
        <div class="col-md-2">
            <p class="text-muted">Feedback</p>
            <div class="font-w600">
              {{ row.feedback }}
            </div>
        </div>
        <div class="col-md-1">
            <p class="text-muted">Date</p>
            <div class="font-w600">
              {{ row.date }}
            </div>
        </div>
        <div class="col-md-1">
            <p class="text-muted">Form</p>
            <div class="font-w600">
              {{ row.form.name }}
            </div>
        </div>
        <div class="col-md-1">
            <p class="text-muted">Form Type</p>
            <div class="font-w600">
              {{ row.form.form_type }}
            </div>
        </div>
        <div class="col-md-1">
            <p class="text-muted">Status</p>
            <div class="font-w600">
              {{ row.status }}
            </div>
        </div>
        <div class="col-md-2">
            <p class="text-muted">Action</p>
            <button class="btn btn-default btn-sm push-5-r">
                <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-default btn-sm push-5-r">
                <i class="fa fa-eye"></i>
            </button>
            <button class="btn btn-default btn-sm push-5-r">
                <i class="fa fa-trash"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "TableRow",
  props: ["row"],
};
</script>

<style>
.row {
  align-items: center;
  display: flex;
  padding: 20px;
}
</style>