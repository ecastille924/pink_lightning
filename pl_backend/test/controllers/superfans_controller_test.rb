require "test_helper"

class SuperfansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @superfan = superfans(:one)
  end

  test "should get index" do
    get superfans_url, as: :json
    assert_response :success
  end

  test "should create superfan" do
    assert_difference('Superfan.count') do
      post superfans_url, params: { superfan: { email: @superfan.email, firstname: @superfan.firstname, lastname: @superfan.lastname } }, as: :json
    end

    assert_response 201
  end

  test "should show superfan" do
    get superfan_url(@superfan), as: :json
    assert_response :success
  end

  test "should update superfan" do
    patch superfan_url(@superfan), params: { superfan: { email: @superfan.email, firstname: @superfan.firstname, lastname: @superfan.lastname } }, as: :json
    assert_response 200
  end

  test "should destroy superfan" do
    assert_difference('Superfan.count', -1) do
      delete superfan_url(@superfan), as: :json
    end

    assert_response 204
  end
end
